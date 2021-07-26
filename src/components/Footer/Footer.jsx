import React from 'react';

import { GiHouse, GiBee } from 'react-icons/gi';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaRegCopyright } from 'react-icons/fa';

import * as S from './Footer.style';

const Footer = () => (
  <>
    <S.Footer>
      <S.Container>
        <S.FooterWrapper>
          <S.Title>contact us</S.Title>

          <S.Ul>
            <S.ListItems>
              <S.Icon>
                <ImPhone />
              </S.Icon>
              +37064352759
            </S.ListItems>

            <S.ListItems>
              <S.Icon>
                <MdEmail />
              </S.Icon>
              bitenumedus@gmail.com
            </S.ListItems>

            <S.ListItems>
              <S.Icon>
                <GiHouse />
              </S.Icon>
              M. Jankaus g. 1, Bitėnų medus
            </S.ListItems>
          </S.Ul>
        </S.FooterWrapper>

        <S.FooterWrapper>
          <S.Title>visit us</S.Title>

          <S.Ul>
            <S.ListItems>
              <S.Icon>
                <GiHouse />
              </S.Icon>
              M. Jankaus g. 1, Bitėnų medus
            </S.ListItems>

            <S.ListItems>
              <S.Icon>
                <GiBee />
              </S.Icon>
              Bityno paso Nr. 63BPR-36
            </S.ListItems>
          </S.Ul>

          <S.CopyRight>
            <S.Icon>
              <FaRegCopyright />
            </S.Icon>
            justina talalaite
          </S.CopyRight>
        </S.FooterWrapper>
      </S.Container>
    </S.Footer>
  </>
);
export default Footer;
