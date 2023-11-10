import Button from './buttons';
import Link from 'next/link';
import dynamic from "next/dynamic";

function Menu({ menuOpen }) {
  const linkNames = [
    'Who We Are',
    'What We Do',
    'History',
    'Contact',
    <Button key="startButton" type='start-button' value="Questions?" style={{color: 'white'}}></Button>
  ];

  return (
    <ul className={`menu ${menuOpen && 'menu-open'}`}>
      {linkNames.map((linkName, index) => (
        <li key={index}>
          {typeof linkName === 'string' ? (
            <Link href={`#${linkName}`}>{linkName}</Link>
          ) : (
            linkName
          )}
        </li>
      ))}
    </ul>
  );
}

export default Menu;