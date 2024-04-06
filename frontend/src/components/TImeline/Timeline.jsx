import React from 'react';

const Timeline = () => {
    return (
        <div className="max-w-6xl mx-auto text-white mb-10 ">
    <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-400">We Are Aim To Providing</h1>
        <p className="text-slate-600 font-semibold">Best Experince For Our Users</p>
    </div>

    <div className="flex justify-center">
    <div className="relative border-l-4 border-blue-500">
        {/* Stage 1: Data Collection */}
        <div className="mb-10 ml-6 flex items-center">
           
            <div className="ml-4">
                <h2 className="text-xl font-bold text-slate-500">Online Learning</h2>
                <p className="text-slate-500 font-semibold text-sm">We try to provide latest blockchain knowledge</p>
            </div>
        </div>

        {/* Repeat for other stages */}
        <div className="mb-10 ml-6 flex items-center">
            
            <div className="ml-4">
                <h2 className="text-xl font-bold text-slate-500">Data Visualizsation</h2>
                <p className="text-slate-500 font-semibold text-sm">We Provide Visualization Based Learning</p>
            </div>
        </div>
        <div className="mb-10 ml-6 flex items-center">
           
            <div className="ml-4">
                <h2 className="text-xl font-bold text-slate-500">Coming Soon</h2>
                <p className="text-slate-500 font-semibold text-sm">Our Very Own AI Model</p>
            </div>
        </div>

        {/* Additional stages can be added similarly */}

    </div>
</div>

</div>

    
    
      
    );
};

export default Timeline;