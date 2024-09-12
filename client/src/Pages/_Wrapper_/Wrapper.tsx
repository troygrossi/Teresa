import {Style} from './_style_/wrapper.style';

const {WrapperSC, PageSC} = Style();

interface IWrapper {
    children: React.ReactNode;
}
export const Wrapper: React.FC<IWrapper> = ({children}) => {
  return(
    <WrapperSC>
        <PageSC>
            {children}
        </PageSC>
    </WrapperSC>
  )
}