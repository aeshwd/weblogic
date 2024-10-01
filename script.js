function openSidebar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "block";
}

function hideSidebar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

/* Products list */

const courseDescriptions = [
  {
    id: 1,
    name: "Frontend Developer",
    price: 2200,
    realprice: 4000,
    category: "frontend",
    imageUrl: 'images/frontend.jpeg',
    description: [
      "Master HTML & CSS to structure and style web pages.",
      "Learn responsive web design using Flexbox and Grid for mobile-first development.",
      "Gain expertise in JavaScript (ES6+), covering DOM manipulation, promises, async/await, and more.",
      "Become proficient in React, learning components, state, props, and hooks for building dynamic UIs.",
      "Optimize web performance, including image compression, lazy loading, and script optimization.",
      "Ensure cross-browser compatibility to create consistent experiences across all major browsers.",
      "Understand web accessibility standards (WCAG) to make websites usable for all users."
    ]
  },
  {
    id: 2,
    name: "Backend Developer",
    price: 3000,
    realprice: 5000,
    category: "backend",
    imageUrl: 'images/backend.jpeg',
    description: [
      "Learn server-side programming with Node.js and Express to handle requests and APIs.",
      "Understand how databases work, including SQL and NoSQL databases like MongoDB.",
      "Dive into RESTful API design, learning how to structure and create APIs for web applications.",
      "Master user authentication techniques, including sessions, JWT, and OAuth2.",
      "Learn about server security best practices to safeguard applications from common threats.",
      "Gain hands-on experience with deploying backend applications to cloud platforms like AWS or Heroku.",
      "Explore the basics of Docker and containerization for creating reproducible development environments."
    ]
  },
  {
    id: 3,
    name: "FullStack Developer",
    price: 5000,
    realprice: 7000,
    category: "full stack",
    imageUrl: 'images/fullstack.jpeg',
    description: [
      "Become proficient in both frontend and backend technologies to build full-stack web applications.",
      "Master frontend tools like HTML, CSS, JavaScript, and React for building interactive UIs.",
      "Learn backend technologies, including Node.js, Express, and databases (SQL/NoSQL).",
      "Gain skills in API design, including creating RESTful APIs and connecting them with frontend apps.",
      "Master database design and management, including CRUD operations, indexing, and optimization.",
      "Understand full-stack security concepts, including data encryption, authentication, and authorization.",
      "Deploy full-stack applications to cloud services like AWS, Heroku, and Netlify."
    ]
  },
  {
    id: 4,
    name: "Hacking",
    price: 8000,
    realprice: 10000,
    category: "hacking",
    imageUrl: 'images/hacking.jpeg',
    description: [
      "Learn ethical hacking techniques to identify and exploit vulnerabilities in networks and systems.",
      "Master penetration testing methods for assessing the security of websites, applications, and databases.",
      "Understand the principles of network security, including firewalls, VPNs, and secure network architectures.",
      "Explore various types of malware, including viruses, worms, and Trojans, and how to defend against them.",
      "Gain hands-on experience with tools like Metasploit, Wireshark, and Kali Linux for real-world security testing.",
      "Understand cryptography basics, including encryption, hashing, and secure key management.",
      "Learn about social engineering attacks and how to defend against human-based security breaches."
    ]
  },
  {
    id: 5,
    name: "Learn Language",
    price: 6000,
    realprice: 8000,
    category: "language",
    imageUrl: 'images/languages.jpeg',
    description: [
      "Master programming languages like Python, JavaScript, and Java to build versatile applications.",
      "Learn the syntax, semantics, and structures of modern programming languages.",
      "Understand object-oriented programming (OOP) concepts, such as classes, inheritance, and polymorphism.",
      "Gain skills in functional programming paradigms, including closures, higher-order functions, and immutability.",
      "Develop problem-solving skills by working through algorithmic challenges and exercises.",
      "Explore language-specific frameworks and libraries to speed up development (e.g., Django for Python, Node.js for JavaScript).",
      "Learn best practices for clean code, debugging, and performance optimization."
    ]
  },
  {
    id: 6,
    name: "Artificial Intelligence",
    price: 6500,
    realprice: 8000,
    category: "AI",
    imageUrl: 'images/ai.jpeg',
    description: [
      "Understand the fundamentals of artificial intelligence and machine learning.",
      "Explore supervised, unsupervised, and reinforcement learning techniques.",
      "Master Python libraries such as TensorFlow, Keras, and Scikit-learn for machine learning applications.",
      "Learn to build and train neural networks for tasks like image recognition, natural language processing, and more.",
      "Understand data preprocessing techniques, including normalization, feature extraction, and data augmentation.",
      "Gain experience with AI models such as decision trees, random forests, and support vector machines.",
      "Deploy AI models into production environments and explore real-world applications of AI."
    ]
  },
  {
    id: 7,
    name: "More Courses",
    price: 0,
    realprice: 0,
    imageUrl: 'images/coming.jpeg',
    description: [
      "Stay tuned for more exciting courses covering new and emerging technologies.",
      "Courses will include new topics like blockchain development, cloud computing, and more.",
      "Our upcoming courses will focus on cutting-edge tools and methodologies to keep you ahead in the tech world.",
      "Explore specializations in various domains such as cybersecurity, data science, and DevOps."
    ]
  }
];

  
  // Function to display products dynamically
  function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Clear previous products
  
    productsToDisplay.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add("product-item");
      productItem.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <button class="kick"> Kick Deal </button>
      <div class= "pri">
        <p class="price">Rs. ${product.price}</p>
        <p class="price real">Rs. ${product.realprice}</p>
      </div>
      <button class="get" onclick="showProductDetails(${product.id})">Get Info</button>
    `
    
      productList.appendChild(productItem);
    });
  }

  function showProductDetails(productId) {
    const selectedProduct = courseDescriptions.find(product => product.id === productId);
    
    // Save product details to localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
  
    // Redirect to product details page
    window.location.href = 'product-details.html';
  }
  
  // Initial display of all products
  displayProducts(courseDescriptions);
  
  // Function to filter products by category
  function filterProducts(category) {
    let filteredProducts = [];
  
    if (category === 'all') {
      filteredProducts = products;
    } else {
      filteredProducts = courseDescriptions.filter(product => product.category === category);
    }
  
    displayProducts(filteredProducts);
  }


  /* Testimonials */

  let currentTestimonial = 1;
    const totalTestimonials = 4;

    function showTestimonial(index) {
      // Hide all testimonials
      for (let i = 1; i <= totalTestimonials; i++) {
        document.getElementById('testimonial' + i).classList.remove('active');
        document.getElementsByClassName('dot')[i - 1].classList.remove('active');
      }

      // Show the selected testimonial
      document.getElementById('testimonial' + index).classList.add('active');
      document.getElementsByClassName('dot')[index - 1].classList.add('active');

      currentTestimonial = index;
    }

    // Automatically cycle through testimonials
    setInterval(() => {
      currentTestimonial++;
      if (currentTestimonial > totalTestimonials) {
        currentTestimonial = 1;
      }
      showTestimonial(currentTestimonial);
    }, 5000); // Change testimonial every 5 seconds

  

  


