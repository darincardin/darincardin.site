import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';




export default (props)=>{
	
	return 			<SyntaxHighlighter language="javascript" style={docco}>{props.code}</SyntaxHighlighter>
					
}