
'use client';
import React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

interface ModelViewerProps {
  src: string;
  poster?: string;
  alt?: string;
}

export const ModelViewer = ({ src, poster, alt }: ModelViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'model-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <model-viewer
        src={src}
        poster={poster}
        alt={alt || "3D Product Preview"}
        camera-controls
        touch-action="pan-y"
        shadow-intensity="1"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          '--poster-color': 'transparent',
        }}
        exposure="1"
        ar-modes="webxr scene-viewer quick-look"
        interaction-prompt="none"
      >
        <div slot="poster" className="absolute inset-0 flex items-center justify-center bg-transparent pointer-events-none">
          {/* Internal poster handled by model-viewer */}
        </div>
      </model-viewer>
    </div>
  );
};
