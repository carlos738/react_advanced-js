import React,{Component} from 'react'
import ErrorImg from './error.jpg'
import { render } from '@testing-library/react';

class ErrorBoundary extends Component{

    constructor(props){
        super(props)
            this.state ={
                hasError: false
            }
        }
        componentDidCatch(error,errorInfo){
            this.setState({
                hasError: true
            })
        }
        render(){
            if (this.setState.hasError) {
                return <img src="{Error}"/>
                
            }
            return this.props.children
        }
    }

export default ErrorBoundary