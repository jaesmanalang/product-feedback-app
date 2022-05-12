import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <div className="flex h-screen gap-8 pt-20">
        <aside className="w-64 flex-shrink-0 max-w-xs flex flex-col">
          <div className="sticky top-20">
            <Card>
              <h1 className="text-lg font-bold">Aside</h1>
            </Card>
          </div>
        </aside>
        <main className="flex-1">
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
          <Card>
            <h1>Main</h1>
          </Card>
        </main>
      </div>
    </div>
  );
}

export default App;
