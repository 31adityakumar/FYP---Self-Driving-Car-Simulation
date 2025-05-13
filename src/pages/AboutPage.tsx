const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            About the Project
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This project simulates self-driving cars navigating procedurally generated roads. 
              Each car is controlled by a neural network that evolves through mutation to 
              improve navigation skills and obstacle avoidance over time.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Details</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>
                <strong>Neural Network Architecture:</strong> Feedforward neural network with 
                multiple hidden layers that process sensor inputs and control the car's movement.
              </li>
              <li>
                <strong>Evolution Mechanism:</strong> Networks evolve through mutation where 
                the best-performing cars have their networks copied with slight modifications 
                to the next generation.
              </li>
              <li>
                <strong>Environment Generation:</strong> Roads are procedurally generated with 
                varying complexity to challenge the neural networks in different scenarios.
              </li>
              <li>
                <strong>Technologies Used:</strong> React, TypeScript, HTML5 Canvas for visualization, 
                and custom neural network implementation.
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Team Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Aditya.jpeg" 
                    alt="Aditya Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Aditya Kumar</h3>
                <p className="text-gray-600">Roll: 2113171</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/Devansh.jpeg" 
                    alt="Devansh Pandey" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Devansh Pandey</h3>
                <p className="text-gray-600">Roll: 2113142</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/team/arnob.jpeg" 
                    alt="Md Mirajus Salakin Arnob" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Md Mirajus Salakin Arnob</h3>
                <p className="text-gray-600">Roll: 2113162</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Supervisor</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 md:mb-0 md:mr-6 overflow-hidden flex-shrink-0">
                <img 
                  src="/team/supervisor.jpeg" 
                  alt="Prof. Saurabh Chaudhury" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Prof. Saurabh Chaudhury</h3>
                <p className="text-gray-700 mb-2">Department of Electrical Engineering</p>
                <p className="text-gray-700">National Institute of Technology, Silchar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 