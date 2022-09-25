import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'
import { Menu } from '.'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const history = createMemoryHistory({ initialEntries: ['/'] })

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <Router location={history.location} navigator={history}>
      <Menu />
    </Router>
  )

  return {
    sut
  }
}

describe('Menu', () => {
  test('Should go to Signup page if Signup link is clicked', () => {
    makeSut()

    const signupLink = screen.getByRole('link', { name: /signup/i })

    signupLink.click()

    expect(history.location.pathname).toBe('/signup')
  })

  test('Should go to Login page if Login link is clicked', () => {
    makeSut()

    const loginLink = screen.getByRole('link', { name: /login/i })

    loginLink.click()

    expect(history.location.pathname).toBe('/login')
  })

  test('Should go to Home page if Home link is clicked', () => {
    makeSut()

    const homeLink = screen.getByRole('link', { name: /home/i })

    homeLink.click()

    expect(history.location.pathname).toBe('/')
  })
})
