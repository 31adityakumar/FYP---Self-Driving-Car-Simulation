import { useState, useRef, useEffect } from 'react';

const SimulationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSimulation, setShowSimulation] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const handleStartSimulation = () => {
    setShowSimulation(true);
    // Scroll to simulation container after a short delay to ensure DOM update
    setTimeout(() => {
      simulationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };
  
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const toggleFullscreen = () => {
    if (!iframeContainerRef.current) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error(`Error exiting fullscreen: ${err.message}`);
      });
    } else {
      iframeContainerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error entering fullscreen: ${err.message}`);
      });
    }
  };

  // Effect to handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-4" ref={simulationRef}>
      {!showSimulation && (
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Self-Driving Car Simulation
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience our neural network-powered vehicles navigating procedurally generated environments
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10 border border-gray-200">
            <div className="p-6 md:p-8 bg-blue-50 border-b border-blue-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Simulation Environment
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This simulation demonstrates self-driving cars navigating procedurally 
                generated roads using neural networks that evolve over time. The cars use 
                sensors to detect the road boundaries and obstacles, feeding this data to 
                a feedforward neural network that controls steering and acceleration.
              </p>
              
              <div className="text-center">
                <button
                  onClick={handleStartSimulation}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Launch Simulation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {showSimulation && (
        <div 
          className={`relative ${isFullscreen 
            ? 'fixed inset-0 w-full h-full m-0 p-0 z-50 bg-black' 
            : 'bg-gray-800 rounded-lg overflow-hidden h-[85vh] max-w-7xl mx-auto my-4 shadow-2xl'}`} 
          ref={iframeContainerRef}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                <p className="mt-4 text-lg text-blue-100">Loading simulation...</p>
              </div>
            </div>
          )}
          
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            <button 
              onClick={toggleFullscreen}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              )}
            </button>
          </div>
          
          <iframe
            ref={iframeRef}
            src="https://radufromfinland.com/projects/virtualworld/"
            className="w-full h-full"
            onLoad={handleIframeLoad}
            title="Self-Driving Car Simulation"
            allowFullScreen
            style={{ 
              border: 'none',
              margin: 0,
              padding: 0,
              overflow: 'hidden',
              display: 'block',
              position: isFullscreen ? 'absolute' : 'relative',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          ></iframe>
        </div>
      )}
      
      {!showSimulation && (
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Neural Network</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Each car is controlled by a feedforward neural network:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="font-medium">Inputs:</strong> Data from sensors detecting road boundaries and obstacles
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="font-medium">Hidden Layers:</strong> Process the sensor data through weighted connections
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="font-medium">Outputs:</strong> Control signals for steering and acceleration/braking
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Evolution Process</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The neural networks evolve through a process inspired by natural selection:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="font-medium">Fitness:</strong> Cars are evaluated based on how far they travel without crashing
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="font-medium">Selection:</strong> The best-performing networks are selected
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="font-medium">Mutation:</strong> Random changes to network weights create new variations
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="font-medium">Iteration:</strong> Over many generations, the network improves its driving ability
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <p className="text-gray-600 italic">
              "The simulation demonstrates how simple neural networks can learn complex behaviors through evolutionary processes."
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulationPage; 