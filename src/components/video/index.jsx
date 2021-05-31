import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const ConCon = styled.div`
 position: 'relative';
 
  
  

`;



export function Video () {
    return (
    
        <>
        <ConCon>
        <Container>
            <ConCon/>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=b9xBAtCsCTQ"
            muted="true"
            playing="false"
            
            />
            
        </Container>
        </ConCon>
        </>
    );
}