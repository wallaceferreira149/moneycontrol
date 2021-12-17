import {Container} from './styles'

export function TransactionsTable(){
  return(
    <Container>
       <table>
         <thead>
           <tr>
             <th>Título</th>
             <th>Valor</th> 
             <th>Categoria</th> 
             <th>Data</th> 
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Desenvolvimento de web</td>
             <td className="deposity">R$ 12.0000</td>
             <td>Desenvolvimento</td>
             <td>20/12/2021</td>
           </tr>
           <tr>
             <td>Desenvolvimento de web</td>
             <td className="withdraw">R$ 12.0000 </td>
             <td>Desenvolvimento</td>
             <td>20/12/2021</td>
           </tr>
           <tr>
             <td>Desenvolvimento de web</td>
             <td>R$ 12.0000 </td>
             <td>Desenvolvimento</td>
             <td>20/12/2021</td>
           </tr>
         </tbody>
       </table>
    </Container>
  );
}