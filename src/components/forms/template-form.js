import React from 'react'
import { Row, Col } from 'reactstrap'
import cn from 'classnames'
import template1 from '../../img/template-1.svg'
import template2 from '../../img/template-2.svg'

export function TemplateForm({chooseTemplate, template}) {
  const templates = [
    {
      title: 'Template 1',
      image: template1,
      current: 'templateOne'
    },
    {
      title: 'Template 2',
      image: template2,
      current: 'templateTwo'
    },
    {
      title: 'Template 2',
      image: template1,
      current: 'templateOne'
    },
    {
      title: 'Template 3',
      image: template2,
      current: 'templateTwo'
    },

  ]

  return (
    <>
      <h3 className='mb-4'>Choose template</h3>
      <Row>
        {templates.map(({title, image, current}, index) => (
          <Col md='6' className='mb-3' key={index}>
            <div className='mb-2'>{title}</div>
            <div className={cn('template-tmb', {active: template === current})} id={current} onClick={chooseTemplate}>
              <img className='img-fluid' src={image} alt={title} />
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}