import React, {useState} from 'react'
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import SourceModal from './source-modal'
import { GeneralForm } from './forms/general-form'
import { TemplateForm } from './forms/template-form'
import { SocialForm } from './forms/social-form'
import cn from 'classnames'

export default function Controls({template, signature, handleInputChange, chooseTemplate, reset}) {

  const [activeTab, setActiveTab] = useState('template');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return(
    <aside className='control-wrapper bg-dark text-light'>
      <Nav tabs className='form-tabs'>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'template' })}
            onClick={() => { toggle('template'); }}
          >
            T
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'general' })}
            onClick={() => { toggle('general'); }}
          >
            G
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'social' })}
            onClick={() => { toggle('social'); }}
          >
            S
          </NavLink>
        </NavItem>
        <SourceModal buttonLabel='Get source' signature={signature} template={template} />
      </Nav>
      <div className='form-wrapper p-5 d-flex flex-column'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='template'>
              <TemplateForm template={template} chooseTemplate={chooseTemplate} />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='general'>
              <GeneralForm signature={signature} handleInputChange={handleInputChange} />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='social'>
              <SocialForm signature={signature} handleInputChange={handleInputChange} />
            </TabPane>
          </TabContent>
          <div className='mt-auto'>
            <Button onClick={reset} block>Reset all fields</Button>
          </div>
      </div>
    </aside>
  )
}