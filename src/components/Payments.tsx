import { useState, useEffect } from "react";


const Payments = () : JSX.Element => {

    interface Transaction {
        id: number;
        date: string;
        country: string;
        currency: string;
        amount: number;
      }


    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => {
        setVisible(prevVisible => !prevVisible);
      };

    const [data, setData] = useState<Transaction[]>([]);



    useEffect(() => {
        fetch('/transaction.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div>        


            <button onClick={toggleVisibility}> {visible ? 'Hide' : 'Show'} Search</button>
            <table style= {{display : visible ? 'table' : 'none' }} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Country</th>
                        <th>Currency</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.country}</td>
                        <td>{item.currency}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
                </tbody>

            </table>


        </div>);



}

export default Payments;