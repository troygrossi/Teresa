import {Style} from './_style_/wrapper.style';
import { useSelector } from '../../redux/redux';

const {WrapperSC, PageSC} = Style();

interface IWrapper {
    children: React.ReactNode;
}
export const Wrapper: React.FC<IWrapper> = ({children}) => {

  const window = useSelector((state)=>state.window.windowQuery)
  return(
    <WrapperSC  >
        <PageSC window={window}>
            {children}
        </PageSC>
    </WrapperSC>
  )
}