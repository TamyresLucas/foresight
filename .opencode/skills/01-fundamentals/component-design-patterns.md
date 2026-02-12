# Component Design Patterns

## Descrição
Padrões de design de componentes reutilizáveis e flexíveis para o Foresight Design System, focando em composição e extensibilidade.

## Regras Obrigatórias

### DO
- ✅ Preferir composition sobre configuração
- ✅ Usar Compound Components para componentes complexos (Tabs, Accordion)
- ✅ Implementar render props quando necessário para customização
- ✅ Criar componentes polimórficos com prop `as` para flexibilidade
- ✅ Separar lógica de apresentação (Container/Presentational)
- ✅ Usar children como função para lógica compartilhada

### DON'T
- ❌ Criar componentes "God" com muitas props booleanas
- ❌ Misturar lógica de negócio com UI em um único componente
- ❌ Usar render props quando composition resolveria
- ❌ Criar componentes polimórficos sem tipagem adequada
- ❌ Sobrepor componentes que deveriam ser compostos

## Exemplos de Código

### Composition Pattern
```tsx
// Card.tsx
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-body">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="card-footer">{children}</div>;
}

// Usage
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Actions</CardFooter>
</Card>
```

### Compound Components (Tabs)
```tsx
import React, { createContext, useContext, useState } from 'react';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({ children, defaultTab }: { children: React.ReactNode; defaultTab: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children }: { children: React.ReactNode }) {
  return <div className="tab-list">{children}</div>;
}

export function Tab({ value, children }: { value: string; children: React.ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');
  
  return (
    <button
      className={`tab ${context.activeTab === value ? 'active' : ''}`}
      onClick={() => context.setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, children }: { value: string; children: React.ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabPanel must be used within Tabs');
  
  if (context.activeTab !== value) return null;
  return <div className="tab-panel">{children}</div>;
}

// Usage
<Tabs defaultTab="overview">
  <TabList>
    <Tab value="overview">Overview</Tab>
    <Tab value="settings">Settings</Tab>
  </TabList>
  <TabPanel value="overview">Overview content</TabPanel>
  <TabPanel value="settings">Settings content</TabPanel>
</Tabs>
```

### Polymorphic Component
```tsx
import React from 'react';

type PolymorphicProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

export function Box<C extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: PolymorphicProps<C>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}

// Usage
<Box>Default div</Box>
<Box as="button" onClick={handleClick}>Button</Box>
<Box as={Link} to="/home">Link component</Box>
```

### Container/Presentational Pattern
```tsx
// UserListContainer.tsx - Lógica de dados
export function UserListContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);
  
  return <UserList users={users} loading={loading} />;
}

// UserList.tsx - Apresentação
interface UserListProps {
  users: User[];
  loading: boolean;
}

export function UserList({ users, loading }: UserListProps) {
  if (loading) return <Spinner />;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Quando Usar Cada Padrão

| Padrão | Use quando... |
|--------|---------------|
| Composition | Componente tem múltiplas seções configuráveis |
| Compound Components | Estado compartilhado entre partes relacionadas |
| Render Props | Customização de rendering com acesso a dados internos |
| Polymorphic | Componente precisa renderizar diferentes elementos |
| Container/Presentational | Separação clara entre lógica e UI necessária |

## Checklist de Verificação
- [ ] Componente usa composition ao invés de muitas props
- [ ] Compound components possuem contexto compartilhado
- [ ] Polymorphic components estão corretamente tipados
- [ ] Container e Presentational estão separados quando apropriado
- [ ] Cada padrão foi escolhido para o caso de uso específico
- [ ] Componentes filhos verificam contexto e lançam erros se necessário

## Referências Úteis
- [React Patterns - Composition](https://reactpatterns.com/)
- [Kent C. Dodds - Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [Polymorphic React Components](https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/)
