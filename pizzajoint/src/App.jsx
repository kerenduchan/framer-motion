import React, { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Base } from './components/Base'
import { Toppings } from './components/Toppings'
import { Order } from './components/Order'

export function App() {
    const [pizza, setPizza] = useState({ base: '', toppings: [] })

    const addBase = (base) => {
        setPizza({ ...pizza, base })
    }

    const addTopping = (topping) => {
        let newToppings
        if (!pizza.toppings.includes(topping)) {
            newToppings = [...pizza.toppings, topping]
        } else {
            newToppings = pizza.toppings.filter((item) => item !== topping)
        }
        setPizza({ ...pizza, toppings: newToppings })
    }

    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/base"
                    element={<Base addBase={addBase} pizza={pizza} />}
                />
                <Route
                    path="/toppings"
                    element={<Toppings addTopping={addTopping} pizza={pizza} />}
                />
                <Route path="/order" element={<Order pizza={pizza} />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
