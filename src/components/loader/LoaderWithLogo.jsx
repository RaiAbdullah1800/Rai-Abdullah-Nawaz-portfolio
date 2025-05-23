// STYLED COMPONENT
import { RootStyle } from './styles';
export default function LoaderWithLogo() {
  return <RootStyle className="loading-wrapper">
      <div className="logo">
        <img src="/static/logo/logo-png.png" alt="Rai-abdullash signature" />
      </div>

      <div className="loading-content"></div>
    </RootStyle>;
}