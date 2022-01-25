import Head from 'next/head'
import Image from 'next/image'
import { Provider, useDispatch } from 'react-redux'
import styles from '../styles/Home.module.css'
import store from '../src/redux';
import { useSelector } from 'react-redux'


export default function Home() {

  const store = useSelector(store => store)

  const dispatch = useDispatch();

  console.log('store: ', store);

  return (
    <div>
      redux saga tutorial
      <button onClick={() => dispatch({type: 'LOAD_DATA'})}>
        click me
      </button>
    </div>
  )
}
