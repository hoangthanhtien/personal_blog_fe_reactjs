import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CBadge,
  CTabs,
  CNavItem,
  CNav,
  CNavLink,
  CTabContent,
  CTabPane,
  CButton,
  CProgressBar,
  CProgress,
  CContainer,
  CRow
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'

const lorem = "TESTING LOREM"
const Todos = () =>{
  return (
    <>
      <CCard>
        <CCardHeader>
          <div class="d-grid gap-2 d-md-flex justify-content-md-between">
            <h4>Todos list - Danh sách việc cần làm</h4>
            <div>
            <CButton color="success">Thêm Project</CButton>
            <CButton color="success">Thêm Project</CButton>
            </div>
          </div>
        </CCardHeader>
        <CCardBody>
            <CTabs>
              <CNav variant="tabs ">
                  <div class="row w-100 justify-content-between">
                    <div><h4>HEADER</h4></div>
                  <div class='row'>
                  <CNavItem>
                    <CNavLink>
                     Cần làm&nbsp;
                     <CBadge color="warning">10</CBadge>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                     Đang làm&nbsp;
                     <CBadge color="info">10</CBadge>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                     Đã hoàn thành&nbsp;
                     <CBadge color="success">10</CBadge>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                     Quá hạn&nbsp;
                     <CBadge color="danger">10</CBadge>
                    </CNavLink>
                </CNavItem>
                <CButton color="success">+</CButton>
              </div>
              </div>
              </CNav>
              <CTabContent>
                <CTabPane>
                <CProgress size="xs">
                  <CProgressBar color="danger"value={10}/>
                  <CProgressBar color="info" value={30}/>
                  <CProgressBar color="success" value={20}/>
                </CProgress>
                  {`1. ${lorem}`}
                </CTabPane>
                <CTabPane>
                <CProgress size="xs">
                  <CProgressBar color="danger"value={10}/>
                  <CProgressBar color="info" value={30}/>
                  <CProgressBar color="success" value={20}/>
                </CProgress>
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane>
                <CProgress size="xs">
                  <CProgressBar color="danger"value={10}/>
                  <CProgressBar color="info" value={30}/>
                  <CProgressBar color="success" value={20}/>
                </CProgress>
                  {`3. ${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Todos
