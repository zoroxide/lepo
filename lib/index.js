// lib/index.js

// Define a simple component class
class Component {
    constructor(props) {
      this.props = props;
    }
  
    // Render method to generate HTML
    render() {
      throw new Error('You must override render method');
    }
  }
  
  // Create a function to render a component to the DOM
  function renderComponent(component, container) {
    container.innerHTML = component.render();
  }
  
  // Define a simple virtual DOM renderer
  function render(element, container) {
    if (typeof element.type === 'function') {
      const component = new element.type(element.props);
      renderComponent(component, container);
    } else {
      container.innerHTML = element;
    }
  }
  
  // Define a simple createElement function to create virtual DOM elements
  function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child =>
          typeof child === 'object' ? child : createTextElement(child)
        )
      }
    };
  }
  
  // Helper function to create a text element
  function createTextElement(text) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: text,
        children: []
      }
    };
  }
  
  // Export the render function and createElement function
  module.exports = {
    render,
    createElement
  };
  