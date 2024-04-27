import React from 'react'

export default function Form({username, setUsername, password, setPassword, onSubmit, BtnText}) {
  return (
    <div class="auth-container">
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{BtnText}</button>
      </form>
    </div>
  )
}
