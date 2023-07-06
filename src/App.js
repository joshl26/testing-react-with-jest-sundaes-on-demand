import { Container } from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry.jsx";
import { OrderDetailsProvider } from "./contexts/OrderDetails.jsx";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/*Summary page and entry page need provider*/}
        <OrderEntry />
      </OrderDetailsProvider>
      {/*Confirmation page does not need provider*/}
    </Container>
  );
}

export default App;
