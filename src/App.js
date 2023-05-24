import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SalesDetails from './pages/SalesDetails';
import StockReport from './pages/StockReport';
import Order from './pages/Order';
import LogisticsOrderInvoice from './pages/LogisticsOrderInvoice';
import Page from './components/Page';

const App = () => {
  // Supondo que voc� tenha um objeto JSON com os dados do menu
  const menuItems = [
    { id: 1, title: 'Manager', path: '/' },
    { id: 2, title: 'Visualizar Faturamento', path: '/commercial/sales/details', },
    { id: 3, title: 'Pedido', path: '/order' },
    { id: 4, title: 'Setar Pedido', path: '/logistics/order/invoice' },
    { id: 5, title: 'Relatório de Estoque', path: '/logistics/stock-report' },

  ];

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Sidebar menuItems={menuItems} />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Page page={<Home />} accessPublic={false} accessRole="COMMON" />} />
              <Route path="/commercial/sales/details" element={<Page page={<SalesDetails />} accessPublic={false} accessRole="COMERCIAL.FATURAMENTO" />} />
              <Route path="/order" element={<Page page={<Order />} accessPublic={false} accessRole="COMMON" />} />
              <Route path="/logistics/order/invoice" element={<Page page={<LogisticsOrderInvoice />} accessPublic={false} accessRole="COMMON" />} />
              <Route path="/logistics/stock-report" element={<Page page={<StockReport />} accessPublic={false} accessRole="LOGISTICA.RELATORIOS.GERENCIAIS" />} />
              {/* Adicione mais rotas para outras páginas */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
