import React from 'react'
import { AppShell, Navbar, Header, ThemeIcon, Title, Select, Autocomplete } from '@mantine/core';
import './HomePage.scss'
const HomePage = () => {
    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar height={600} padding="xs">
                    <Navbar.Section className="title">
                        <ThemeIcon></ThemeIcon>
                        <Title order={3}>Application</Title>
                    </Navbar.Section>
                    <Navbar.Section mt="lg" className="unstyledButtonSelected"><span className="unstyledButtonTextSelected">Something</span></Navbar.Section>

                    <Navbar.Section mt="lg" className="unstyledButton"><span className="unstyledButtonText">SomethingElse</span></Navbar.Section>
                    <Navbar.Section mt="lg" className="unstyledButton"><span className="unstyledButtonText">Anything</span></Navbar.Section>
                </Navbar>
            }
        >
            <Header className="header">
                <div className="header-container">
                    <Title order={3}>Yessir </Title>
                    <div className="header-cell">
                        <Select
                            
                            data={[{ value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },]}></Select>

                        <Autocomplete
                            placeholder="Search by tag"
                            data={['React', 'Angular', 'Svelte', 'Vue']}
                        />
                    </div>
                </div>
            </Header>
        </AppShell>


    )
}

export default HomePage;

