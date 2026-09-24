'use client';

import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './Lightfall.css';

export interface LightfallProps {
  streakCount?: number;
  speed?: number;
  glow?: number;
  streakColor?: [number, number, number];
  bgColor?: [number, number, number];
  className?: string;
  style?: React.CSSProperties;
}

export const Lightfall: React.FC<LightfallProps> = ({
  streakCount = 10,
  speed = 0.35,
  glow = 0.25,
  streakColor = [0.92, 0.65, 0.28], // Warm antique amber gold
  bgColor = [0.04, 0.07, 0.13],     // Deep scholarly midnight navy
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    let renderer: Renderer | null = null;
    let animationFrameId: number;
    let canvasElement: HTMLCanvasElement | null = null;

    try {
      renderer = new Renderer({
        alpha: true,
        antialias: true,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      });

      // Explicitly cast to any for OGL internal context compatibility
      const gl = renderer.gl as any;
      canvasElement = gl.canvas as HTMLCanvasElement;
      
      if (canvasElement && canvasElement.classList) {
        container.appendChild(canvasElement);
        canvasElement.classList.add('lightfall-canvas');
      }

      const geometry = new Triangle(gl);

      const vertex = /* glsl */ `
        attribute vec2 position;
        attribute vec2 uv;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      const fragment = /* glsl */ `
        precision highp float;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform float uStreakCount;
        uniform float uGlow;
        uniform vec3 uStreakColor;
        uniform vec3 uBgColor;
        varying vec2 vUv;

        // Hash helper
        float hash(float n) {
          return fract(sin(n) * 43758.5453123);
        }

        void main() {
          vec2 st = gl_FragCoord.xy / uResolution.xy;
          // Maintain calm aspect ratio
          float aspect = uResolution.x / uResolution.y;
          
          vec3 col = uBgColor * 0.0; // Allow background blending

          float totalLight = 0.0;
          float numStreaks = uStreakCount;

          for (float i = 0.0; i < 24.0; i += 1.0) {
            if (i >= numStreaks) break;
            
            float seed = i * 19.345 + 3.14;
            float xPos = hash(seed);
            float streakSpeed = 0.15 + hash(seed + 1.2) * 0.25;
            float streakWidth = 0.003 + hash(seed + 4.5) * 0.008;
            float streakLength = 0.25 + hash(seed + 8.9) * 0.45;
            
            // Falling position over time
            float yPos = fract(1.0 - (uTime * streakSpeed * 0.2 + hash(seed + 2.3)));
            
            // Distance calculations
            float dx = abs(st.x - xPos);
            float dy = st.y - (yPos - streakLength * 0.5);
            
            // Vertical beam mask
            float vertMask = smoothstep(0.0, streakLength * 0.3, st.y - (yPos - streakLength)) *
                             smoothstep(streakLength, streakLength * 0.6, st.y - (yPos - streakLength));
            
            // Soft horizontal glow
            float streak = (streakWidth / (dx + streakWidth * 0.8)) * vertMask;
            totalLight += streak * (0.4 + hash(seed + 9.1) * 0.6);
          }

          // Gentle ambient radial vignette
          float centerDist = distance(st, vec2(0.5, 0.5));
          totalLight *= (1.0 - centerDist * 0.4);

          // Apply glow factor
          totalLight *= uGlow;

          // Color output with alpha for subtle blending
          vec3 finalColor = uStreakColor * totalLight;
          float alpha = clamp(totalLight * 1.5, 0.0, 0.7);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `;

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: [container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight] },
          uStreakCount: { value: streakCount },
          uGlow: { value: glow },
          uStreakColor: { value: streakColor },
          uBgColor: { value: bgColor },
        },
        transparent: true,
      });

      const mesh = new Mesh(gl, { geometry, program });

      const handleResize = () => {
        if (!container || !renderer) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        program.uniforms.uResolution.value = [width, height];
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      let startTime = performance.now();

      const renderLoop = (t: number) => {
        const elapsed = (t - startTime) * 0.001 * speed;
        program.uniforms.uTime.value = elapsed;
        renderer?.render({ scene: mesh });
        animationFrameId = requestAnimationFrame(renderLoop);
      };

      animationFrameId = requestAnimationFrame(renderLoop);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (canvasElement && canvasElement.parentNode) {
          canvasElement.parentNode.removeChild(canvasElement);
        }
        const loseContext = gl?.getExtension('WEBGL_lose_context');
        if (loseContext) loseContext.loseContext();
      };
    } catch (err) {
      console.warn('WebGL Lightfall initialization skipped:', err);
    }
  }, [streakCount, speed, glow, streakColor, bgColor]);

  return (
    <div
      ref={containerRef}
      className={`lightfall-container ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

export default Lightfall;
