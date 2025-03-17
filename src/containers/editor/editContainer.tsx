'use client';
import React from 'react';
import { InitialStage } from './InitialStage';
import { ActiveStage } from './ActiveStage';
import { ClosedStage } from './ClosedStage';

interface PipelineDisplayProps {
  className?: string;
}

const PipelineDisplay: React.FC<PipelineDisplayProps> = ({ className }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      <InitialStage />
      <ActiveStage />
      <ClosedStage />
    </div>
  );
};

export default PipelineDisplay;