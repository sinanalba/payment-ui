import { useState, useEffect } from "react";


const Payments = () : JSX.Element => {

    interface Transaction {
        id: number;
    }

    const tableStyle = {
        border: "10px",
        color:"blue"
    }

    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => {
        setVisible(prevVisible => !prevVisible);
      };

    const [data, setData] = useState<Transaction[]>([]);



    useEffect(() => {
        fetch('transaction.json')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);

    return (
        <div>        


            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} Search</button>
            <table style= {{display : visible ? 'block' : 'none' }} >
                <thead>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Country</th>
                    <th>Currency</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </div>);



}

export default Payments;