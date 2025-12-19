import { useState } from 'react'
import Reveal from './Reveal'

function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const expanded = open === index
        return (
          <Reveal key={item.question} as="div">
            <div className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setOpen(expanded ? null : index)}
                aria-expanded={expanded}
              >
                <span>{item.question}</span>
                <span style={{ fontWeight: 800 }}>{expanded ? '–' : '+'}</span>
              </button>
              {expanded && <div className="accordion-panel">{item.answer}</div>}
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

export default FAQAccordion
