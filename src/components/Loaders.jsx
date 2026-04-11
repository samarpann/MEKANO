import React from 'react';

export const SkeletonCard = () => (
    <div className="glass-card overflow-hidden animate-pulse">
        <div className="aspect-square bg-white/5"></div>
        <div className="p-6 space-y-4">
            <div className="h-6 bg-white/5 rounded-lg w-3/4"></div>
            <div className="h-4 bg-white/5 rounded-lg w-1/2"></div>
            <div className="h-8 bg-white/5 rounded-lg w-full mt-4"></div>
        </div>
    </div>
);

export const SkeletonDetail = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-pulse">
        <div className="space-y-6">
            <div className="aspect-square bg-white/5 rounded-3xl"></div>
            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-white/5 rounded-xl"></div>)}
            </div>
        </div>
        <div className="space-y-8">
            <div className="h-10 bg-white/5 rounded-xl w-3/4"></div>
            <div className="space-y-4">
                <div className="h-4 bg-white/5 rounded-lg w-full"></div>
                <div className="h-4 bg-white/5 rounded-lg w-full"></div>
                <div className="h-4 bg-white/5 rounded-lg w-2/3"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => <div key={i} className="h-24 bg-white/5 rounded-2xl"></div>)}
            </div>
        </div>
    </div>
);
