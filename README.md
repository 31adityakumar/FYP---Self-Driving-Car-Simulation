# Self Driving Car Simulation - Final Year Project

This repository contains the presentation website for the B.Tech Final Year Project on Self Driving Car Simulation developed at National Institute of Technology, Silchar.

## Project Overview

The project simulates self-driving cars navigating procedurally generated roads using custom AI powered by feedforward neural networks that evolve through mutation.

### Key Features

- **Neural Network Evolution**: Cars are controlled by neural networks that evolve via mutation to improve navigation and obstacle avoidance.
- **Procedural Road Generation**: Each simulation features dynamically generated roads with varying complexity.
- **Multiple Cars**: Simulation runs with multiple cars simultaneously, each controlled by its own neural network.
- **Real-time Visualization**: Watch the neural networks in action as cars navigate through the environment.

## Team Members

- Aditya Kumar (2113171)
- Devansh Pandey (2113142)
- Md Mirajus Salakin Arnob (2113162)

Under the supervision of **Prof. Saurabh Chaudhury**, Department of Electrical Engineering, NIT Silchar.

## Technology Stack

- React
- TypeScript
- Vite
- TailwindCSS
- HTML5 Canvas (for simulation rendering)

## Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd self-driving-car-simulation
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

1. Build the project:
   ```bash
   pnpm build
   ```

2. Preview the production build:
   ```bash
   pnpm preview
   ```

## Project Structure

```
self-driving-car-simulation/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Deployment

The project can be deployed to any static hosting service:

1. Build the project:
   ```bash
   pnpm build
   ```

2. Deploy the contents of the `dist` directory to your hosting service.

## License

This project is part of academic work at National Institute of Technology, Silchar.

 