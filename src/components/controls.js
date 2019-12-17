import React, {useState} from 'react'
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import SourceModal from './source-modal'
import { GeneralForm } from './forms/general-form'
import { TemplateForm } from './forms/template-form'
import { SocialForm } from './forms/social-form'
import cn from 'classnames'
// import TemplateIcon from '../icons/js/Template'
// import EditIcon from '../icons/js/Edit'
// import ShareIcon from '../icons/js/Share'

export default function Controls({template, signature, social, dispatch}) {

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
            Style
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'general' })}
            onClick={() => { toggle('general'); }}
          >
            Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'social' })}
            onClick={() => { toggle('social'); }}
          >
            Social
          </NavLink>
        </NavItem>
      </Nav>
      <div className='form-wrapper p-5 d-flex flex-column'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='template'>
              <TemplateForm template={template} dispatch={dispatch} />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='general'>
              <GeneralForm signature={signature} dispatch={dispatch} />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='social'>
              <SocialForm social={social} dispatch={dispatch} />
            </TabPane>
          </TabContent>
          <div className='mt-auto'>
            <SourceModal buttonLabel='Get source' signature={signature} template={template} />
            <Button onClick={() => dispatch({type: 'reset'})} className="text-muted" color='link' block>Reset all fields</Button>
          </div>
      </div>
    </aside>
  )
}