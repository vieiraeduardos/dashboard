import { Home, Bot, Layers3 } from 'lucide-react'

import { AccountMenu } from './account-menu'
//import { ThemeToggle } from './theme-toggle'
import { Separator } from './ui/separator'
import { ThemeToggle } from './theme-toggle'

export function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <Bot className="h-6 w-6" />
                Elroy Bot

                <Separator orientation="vertical" className="h-6" />

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <a href="/">
                        <Home className="h-4 w-4" />
                        Início
                    </a>
                    <a href="/services">
                        <Layers3 className="h-4 w-4" />
                        Atendimentos
                    </a>
                </nav>

                <div className="ml-auto flex items-center space-x-2">
                    <ThemeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
    )
}