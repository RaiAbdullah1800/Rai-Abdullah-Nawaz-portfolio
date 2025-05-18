import FlexBox from '@/components/flexbox/FlexBox';
import IconWrapper from '@/components/icon-wrapper';
import { Paragraph } from '@/components/typography';
import Link from '@mui/material/Link'; // ✅ Import MUI Link

export default function Item({
  Icon,
  title,
  description,
  link
}) {
  return (
    <FlexBox gap={1} alignItems="center">
      <IconWrapper>
        <Icon color="primary" />
      </IconWrapper>

      <div>
        <Paragraph fontSize={16} fontWeight={500}>
          {title}
        </Paragraph>

        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="text"
          >
            {description}
          </Link>
        ) : (
          <Paragraph color="text.secondary">{description}</Paragraph>
        )}
      </div>
    </FlexBox>
  );
}
