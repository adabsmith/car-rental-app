import React from 'react';

function Accordion() {
  return (
    <div className="container">
      <h1 className="text-center">FAQ</h1>
      <div className="accordion-container" style={{ paddingBottom: '50px'}}>
        <div className="accordion" id="accordionFlushExample" style={{ width: '700px', margin: '0 auto' }}>
          <AccordionItem
            id="flush-collapseOne"
            title="Can I rent multiple cars?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie tempus lorem sed dictum. Duis imperdiet risus quis lacus sollicitudin, sed bibendum nibh ultrices. "
          />
          <AccordionItem
            id="flush-collapseTwo"
            title="Accordion Item #2"
            content="Placeholder content for this accordion, which is intended to demonstrate the  class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
          />
          <AccordionItem
            id="flush-collapseThree"
            title="Accordion Item #3"
            content="Placeholder content for this accordion, which is intended to demonstrate the  class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
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
