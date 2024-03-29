"use client";

import { QucharaAdminLogo } from "@/Components/Commons/QucharaAdminLogo";
import { useResponsive } from "@/hooks";
import { COLORS } from "@/theme/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import "react-quill/dist/quill.snow.css";

const TermsLayout = ({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) => {
  const { isMobile } = useResponsive();

  return (
    <>
      <header>
        <Stack
          position="sticky"
          component="nav"
          sx={(theme) => ({
            top: 0,
            height: 60,
            zIndex: theme.zIndex.drawer + 2,
            display: "flex",
            justifyContent: "center",
            borderBottom: `solid 1px ${COLORS.brand300}`,
            alignContent: "center",
            backgroundColor: COLORS.white,
          })}
        >
          <Stack
            sx={{
              px: 4,
              py: 2,
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            alignSelf="center"
            maxWidth={1600}
          >
            <QucharaAdminLogo />
          </Stack>
        </Stack>
      </header>

      <Box component='main' flex={1} mt={2} display="flex" justifyContent='center' className="ql-editor">
        <Stack className="overflow-hidden" component='article' maxWidth={1440}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            component='section'
          >
            <Typography
              className="text-primary text-center mb-1"
              variant={isMobile ? "h5" : "h4"}
            >
              {title}
            </Typography>
          </Box>

          <Box className="font-sfPro" component='section' height='100%' overflow='hidden'>{children}</Box>
        </Stack>
      </Box>

      <Stack
        position="sticky"
        component="footer"
        sx={(theme) => ({
          top: 0,
          height: 60,
          zIndex: theme.zIndex.drawer + 2,
          display: "flex",
          justifyContent: "center",
          borderTop: `solid 1px ${COLORS.brand300}`,
          alignContent: "center",
          backgroundColor: COLORS.white,
        })}
      >
        <Container>
          <Stack
            sx={{
              py: 2,
            }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            gap={4}
            alignSelf="center"
            maxWidth={1600}
          >
            <QucharaAdminLogo height={30} width={100} />
            <Typography
              variant={isMobile ? "caption" : "body1"}
              className="text-orange-500 mb-1 font-semibold"
            >
              Quchara S.A.S. 2024, Todos los derechos reservados
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default TermsLayout;
