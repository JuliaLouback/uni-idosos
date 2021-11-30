import React from 'react'
import { BarChart, XAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as scale from 'd3-scale'

class BarChartHorizontalWithLabels extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            data: this.props.list,
            tipo: this.props.tipo,
            list:  []
        }
    }

    componentDidMount(){

        if(this.state.tipo == 'sono'){

            const semSono = this.state.data.filter(item => item == 1).length
            const sonolente = this.state.data.filter(item => item == 2).length
            const comSono = this.state.data.filter(item => item == 3).length

            this.setState({
                list: [semSono, sonolente, comSono]
            })
        } else {

            const bravo = this.state.data.filter(item => item == 1).length
            const triste = this.state.data.filter(item => item == 2).length
            const neutro = this.state.data.filter(item => item == 3).length
            const feliz = this.state.data.filter(item => item == 4).length
            const alegre = this.state.data.filter(item => item == 5).length

            this.setState({
                list: [bravo, triste, neutro, feliz, alegre]
            })
        }
    }


    render() {

        const data = this.state.list

        return (
            <View style={{ height: 200, padding: 20,}}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    gridMin={0}
                    svg={{ fill: 'rgb(255, 255, 244)' }}
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => value }
                    labelStyle={ { color: 'black' } }
                />
            </View>
        )
    }

}

export default BarChartHorizontalWithLabels