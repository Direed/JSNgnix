import React, {Component} from 'react';
const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th rowSpan='3'>Nginx</th>
            </tr>
        </thead>
    );
}
const TableBody = props =>{
    const rows = props.data.map((row, index) => {
        return(
            <tr key={index}>
                <p>location /{row.l}</p>
                <p>proxy_pass {row.p};</p>
                <p>proxy_set_header {row.psh};</p>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}
class TableFull extends Component {
    render(){
        const {data} = this.props;

        return(
            <table>
                <TableHeader/>
                <TableBody data={data} />
            </table>
        );
    }
}
export default TableFull;