'use client';
import { useState } from 'react';

type LesonProps = {
  title: string;
  shortSummary?: string;
};

type likeState = 'unset' | 'Liked' | 'Disliked';

export function Lesson({ title, shortSummary }: LesonProps) {
  const [likeState, setLikeState] = useState<likeState>('unset');
  const setLike = () => setLikeState('Liked');

  return (
    <div>
      <h2>
        {title}{' '}
        <button
          className="bg-blue-500 rounded p-1 border-1 hover:bg-blue-300 
          transition-colors duration-500"
          onClick={setLike}
        >
          {likeState === 'unset' ? 'Like' : likeState}
        </button>
      </h2>
      <p>{shortSummary}</p>
    </div>
  );
}
