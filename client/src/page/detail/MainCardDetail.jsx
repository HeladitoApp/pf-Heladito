import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../redux/actions/details';
import { getDetails } from '../../redux/slices';
import NotFound from '../NotFound/NotFound';
import AcardDetail from './AcardDetail';
import BcardDetail from './BcardDetail';
import CcardDetail from './CcardDetail';
import DcardDetail from './DcardDetail';
import EcardDetail from './EcardDetail';
import FcardDetail from './FcardDetail';
import GcardDetail from './GcardDetail';
import IcardDetail from './ICardDetail';


export default function MainCardDetail() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.state.details);

  const { productId } = useParams();

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  const aux = product.map(t=> t.detailModel)[0]

  switch (aux) {
    case "A":
      return (<AcardDetail />);
    case "B":
      return (<BcardDetail />);
    case "C":
      return (<CcardDetail />);
    case "D":
      return (<DcardDetail />);
    case "E":
      return (<EcardDetail />);
    case "F":
      return (<FcardDetail />);
    case "G":
      return (<GcardDetail />);
    case "I":
      return (<IcardDetail />);
    default:
      return (<NotFound />)
  }
};
