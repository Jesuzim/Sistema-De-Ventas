import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, MyRoutes, Sidebar } from "./index";
import { Device } from "./styles/breakpoints"
import { useState } from "react";

function App() {
  const { sidebarOpen, setSidebarOpen } = useState(false);
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <Container>
        <GlobalStyles />
        <section className="contentSidebar">
          <Sidebar state={sidebarOpen} setSate={() => setSidebarOpen(!sidebarOpen)} />

        </section>
        <section className="contentMenuambur">
          Menu Hamburguesa
        </section>
        <section className="contentRouters">
          <MyRoutes />
        </section>

      </Container>
    </ThemeProvider>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSidebar{
    display: none;
    background-color: rgba(77,77,77,0.5);
  }
  .contentMenuambur{
    position: absolute;
    background-color: rgba(36, 14, 238, 0.5);
  }
  .contentRouters{
    background-color: rgba(212, 18, 18, 0.5);
    grid-column: 1;
    width: 100%;
  }  
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar{
      display: initial;
    }
    .contentMenuambur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`;

export default App