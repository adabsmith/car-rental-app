import React from 'react';

function Accordion() {
  return (
    <div className="container">
      <h1 className="text-center">FAQ</h1>
      <br></br>
      <div className="accordion-container" style={{ paddingBottom: '50px'}}>
        <div className="accordion" id="accordionFlushExample" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <AccordionItem
            id="flush-collapseOne"
            title="Can I rent multiple cars?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie tempus lorem sed dictum. Duis imperdiet risus quis lacus sollicitudin, sed bibendum nibh ultrices. "
          />
          <AccordionItem
            id="flush-collapseTwo"
            title="What type of Insurance do you provide?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie tempus lorem sed dictum. Duis imperdiet risus quis lacus sollicitudin, sed bibendum nibh ultrices."
          />
          
          <AccordionItem
            id="flush-collapseThree"
            title="How soon can I have the car collected after a booking?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie tempus lorem sed dictum. Duis imperdiet risus quis lacus sollicitudin, sed bibendum nibh ultrices."
          />
        </div>
        
      </div>
    </div>
  );
}

function AccordionItem({ id, title, content }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {title}
        </button>
      </h2>
      <div id={id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
