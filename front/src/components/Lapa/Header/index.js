import React from 'react';
import Image from "next/image";
import styles from "./index.module.css";
import {LoginGreenButton} from '../../GreenButton';
import { LoginWhiteButton } from '../../WhiteButton';
import {CadastrolWhiteButton} from '../../WhiteButton';
import LogoLAPA from '../LogoLAPA/logo_lapa';

//Header com botão de login e cadastro
export function Header01() {
    return (
        <header className={styles.header}>
            
            <div className={styles.boxlogo}>
                < LogoLAPA />
            </div>

            <div className={styles.box_buttons} >
            <button type="button" className="btn btn-outline-success" id={styles.white_button}>Cadastre-se</button>
            < LoginGreenButton />
            </div>
                
        </header>
    );    
  }

  //Header com botão de Home e Sistema
  export function Header02() {
    return (
        <header className={styles.header}>
            
            <div className={styles.boxlogo}>
                < LogoLAPA />
            </div>

            <div className={styles.box_buttons} >
                <button type="button" className="btn btn-link" id={styles.black_button_decoration}>Home</button>
                <button type="button" className="btn btn-link" id={styles.black_button_decoration}>Sistema</button>
            </div>
                
        </header>
    );    
  }

  //Header com ícone de perfil
  export function Header03() {
    return (
        <header className={styles.header}>
            
            <div className={styles.boxlogo}>
                < LogoLAPA />
            </div>

            <div className={styles.box_buttons} >
                <button type="button" class="btn btn-link">
                    <img src='/icone_perfil.svg'/>
                </button>
            </div>
                
        </header>
    );    
  }

  //Header botão de login
  export function Header04() {
    return (
        <header className={styles.header}>
            
            <div className={styles.boxlogo}>
                < LogoLAPA />
            </div>

            <div className={styles.box_buttons} >
                < LoginWhiteButton />
            </div>
                
        </header>
    );    
  }
