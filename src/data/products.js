export const categories = [
    {
        id: "industrial-valves",
        name: "Industrial Valves",
        subCategories: ["All", "Ball Valves", "Safety Valves", "Butterfly Valves", "Gate Valves"],
        description: "High-performance valves for critical flow control in diverse industrial environments.",
        products: [
            { id: 1, name: "CI Ball Valve", sub: "Ball Valves", image: "/assets/products/CI Ball Valve.jpg.jpeg", description: "Durable Cast Iron Ball Valve for general industrial fluid control." },
            { id: 2, name: "CI Safety Valve", sub: "Safety Valves", image: "/assets/products/CI Safety Valve.jpg.jpeg", description: "Cast Iron Safety Relief Valve designed for overpressure protection." },
            { id: 3, name: "Cast Steel Ball Valve", sub: "Ball Valves", image: "/assets/products/Cast Steel Ball Valve.jpg.jpeg", description: "High-pressure Cast Steel Ball Valve for demanding applications." },
            { id: 4, name: "Cast Steel Globe Valve", sub: "Butterfly Valves", image: "/assets/products/Cast Steel Globe Valve.jpg.jpeg", description: "Precision Cast Steel Globe Valve for throttling and frequent operation." },
            { id: 5, name: "SS Ball Valve", sub: "Ball Valves", image: "/assets/products/SS Ball Valve.jpg.jpeg", description: "Corrosion-resistant Stainless Steel Ball Valve for chemical and food industries." },
            { id: 6, name: "Gate Valve", sub: "Gate Valves", image: "/assets/products/Gate Valve.jpg.jpeg", description: "Standard Industrial Gate Valve for reliable shut-off service." },
            { id: 7, name: "Check Valve", sub: "Safety Valves", image: "/assets/products/Check Valve.jpg.jpeg", description: "Non-return Check Valve to prevent backflow in piping systems." },
            { id: 8, name: "Solenoid Valve", sub: "Ball Valves", image: "/assets/products/Solenoid Valve.jpeg", description: "Electrically controlled Solenoid Valve for automated flow control." },
        ]
    },
    {
        id: "pipes-fittings",
        name: "Pipes & Fittings",
        subCategories: ["All", "GI Pipes", "CS Pipes", "ERW Tubes", "Structural Square Tubes"],
        description: "Premium grade pipes and specialized fittings for seamless industrial assembly.",
        products: [
            { id: 9, name: "Flanges SORF", sub: "CS Pipes", image: "/assets/products/Flanges SORF.jpeg", description: "Slip-On Raised Face Flanges for secure pipe connections." },
            { id: 10, name: "Seamless Pipe Fittings", sub: "CS Pipes", image: "/assets/products/Seamless Pipe Fittings.jpeg", description: "High-integrity Seamless Fittings for high-pressure systems." },
            { id: 11, name: "Weldneck Flanges", sub: "GI Pipes", image: "/assets/products/Weldneck  Flanges.jpeg", description: "Robust Weldneck Flanges for severe service conditions." },
            { id: 12, name: "PU Fittings", sub: "ERW Tubes", image: "/assets/products/PU Fittings.jpeg", description: "Quick-connect Polyurethane Fittings for pneumatic lines." },
            { id: 13, name: "Flexible Pipes", sub: "Structural Square Tubes", image: "/assets/products/Flexible Pipes.jpeg", description: "Industrial Flexible Piping for vibration absorption and movement." },
        ]
    },
    {
        id: "jointings-packing",
        name: "Jointings & Packing",
        subCategories: ["All", "Packing", "Gaskets", "Tape"],
        description: "Engineered sealing solutions to ensure leak-proof industrial operations.",
        products: [
            { id: 14, name: "Asbestos Rope", sub: "Packing", image: "/assets/products/Asbestos Rope.jpeg", description: "Heat-resistant Asbestos Rope for thermal insulation and sealing." },
            { id: 15, name: "Asbestos Tape", sub: "Tape", image: "/assets/products/Asbestos Tape(Textile).jpg.jpeg", description: "Textile Asbestos Tape for industrial wrapping and gaskets." },
            { id: 16, name: "Gland Packing", sub: "Packing", image: "/assets/products/Gland Packing_.jpg.jpeg", description: "Premium Gland Packing for pump and valve shafts." },
            { id: 17, name: "Spiral Wound Gasket", sub: "Gaskets", image: "/assets/products/Spiral Wound Gasket.png", description: "High-performance Spiral Wound Gasket for fluctuating pressures." },
            { id: 18, name: "Cut Gaskets", sub: "Gaskets", image: "/assets/products/Cut Gaskets.jpg.jpeg", description: "Custom-cut industrial gaskets for specific flange dimensions." },
        ]
    },
    {
        id: "instruments-meters",
        name: "Instruments & Meters",
        subCategories: ["All", "Flow Meters", "Transmitters", "Gauges"],
        description: "Precision measurement and monitoring devices for process optimization.",
        products: [
            { id: 19, name: "Electromagnetic Flow Meter", sub: "Flow Meters", image: "/assets/products/Electromagnetic Flow Meter.webp", description: "Highly accurate Flow Meter for conductive liquid measurement." },
            { id: 20, name: "Ultrasonic Water Meter", sub: "Flow Meters", image: "/assets/products/Ultrasonic Water Meter.webp", description: "Non-invasive Ultrasonic Meter for efficient water flow monitoring." },
            { id: 21, name: "Ultrasonic Level Transmitter", sub: "Transmitters", image: "/assets/products/Ultrasonic Level Transmitter.webp", description: "Continuous level measurement for liquid and solid surfaces." },
            { id: 22, name: "Water Level Gauge", sub: "Gauges", image: "/assets/products/Bronze Sleeve Packed Water Level Gauge.jpg.jpeg", description: "Visual Water Level Indicator for boilers and tanks." },
            { id: 23, name: "CI Y-Strainer", sub: "Gauges", image: "/assets/products/Cast Iron Y Type Strainer.jpg.jpeg", description: "Cast Iron Y-Type Strainer for removing impurities from fluids." },
        ]
    },
    {
        id: "motors-gearboxes",
        name: "Electric Motors & Gearboxes",
        subCategories: ["All", "Induction Motors", "Three Phase", "Gears"],
        description: "Robust power transmission and drive solutions for heavy-duty machinery.",
        products: [
            { id: 24, name: "Induction Motor", sub: "Induction Motors", image: "/assets/products/Induction Motor.jpg.jpeg", description: "High-efficiency AC Induction Motor for versatile driving force." },
            { id: 25, name: "Three Phase Electric Motor", sub: "Three Phase", image: "/assets/products/Three Phase Electric Motor.jpg.jpeg", description: "Powerful Three-Phase Motor for industrial automation." },
            { id: 26, name: "Geared Motor", sub: "Induction Motors", image: "/assets/products/Geared Motor.jpg.jpeg", description: "Integrated Geared Motor for speed reduction and torque enhancement." },
            { id: 27, name: "Industrial Gears", sub: "Gears", image: "/assets/products/Gears.jpg.jpeg", description: "Precision-engineered gears for mechanical power transmission." },
        ]
    },
    {
        id: "lifting-equipment",
        name: "Lifting & Material Handling",
        subCategories: ["All", "Hoists", "Pulley Blocks"],
        description: "Authorised dealer of Indef lifting solutions for safe and efficient operations.",
        products: [
            { id: 28, name: "Chain Hoist", sub: "Hoists", image: "/assets/products/Chain Hoist.webp", description: "Reliable Chain Hoist for vertical lifting requirements." },
            { id: 29, name: "Electric Hoist", sub: "Hoists", image: "/assets/products/Electric Hoist.webp", description: "Motorized Electric Hoist for rapid and heavy material handling." },
            { id: 30, name: "Manual Chain Pulley Block", sub: "Pulley Blocks", image: "/assets/products/Manual Chain Pulley Block.webp", description: "Classic Manual Pulley Block for precise lifting control." },
        ]
    }
];
