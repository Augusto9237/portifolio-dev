import React from 'react';
import react, { ReactNode } from 'react';
import { Content } from '../Container/styles';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <Content>{children}</Content>;
}
