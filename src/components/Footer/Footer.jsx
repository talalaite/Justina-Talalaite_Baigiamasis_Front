import React from 'react';

import { GiHouse, GiBee } from 'react-icons/gi';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaRegCopyright } from 'react-icons/fa';

import * as S from './Footer.style';

const Footer = () => (
  <>
    <S.Footer>
      <S.FooterWrapper>
        <S.Title>contacts</S.Title>

        <S.Ul>
          <S.ListItems>
            <ImPhone />
            +37064352759
          </S.ListItems>

          <S.ListItems>
            <MdEmail />
            bitenumedus@gmail.com
          </S.ListItems>

          <S.ListItems>
            <GiHouse />
            M. Jankaus g. 1, Bitėnų medus
          </S.ListItems>

          <S.ListItems>
            <GiBee />
            Bityno paso Nr. 63BPR-36
          </S.ListItems>
        </S.Ul>

        <S.CopyRight>
          <FaRegCopyright />
          justina talalaite
        </S.CopyRight>
      </S.FooterWrapper>
    </S.Footer>
  </>
);
export default Footer;
