import ColorPicker from "@/components/atoms/ColorPicker";
import Toggle from "@/components/atoms/Toggle";
import Typography from "@/components/atoms/Typography";
import { ThumbnailFormType } from "@/forms/types";
import styled from "@emotion/styled";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const INITIAL_BORDER = "#e1c8c8";

export default function Border() {
  const { control, setValue } = useFormContext<ThumbnailFormType>();
  const border = useWatch({ control, name: "background.border" });

  const handleToggleClick = () => {
    if (!border) {
      setValue("background.border", INITIAL_BORDER);
      return;
    }

    setValue("background.border", undefined);
  };

  const useBorder = !!border;
  return (
    <Layout>
      <Header>
        <Typography variant="sh4">외곽선</Typography>
        <Toggle checkStatus={useBorder} onClick={handleToggleClick} />
      </Header>

      {useBorder && (
        <Controller
          control={control}
          name="background.border"
          render={({ field: { value, onChange } }) => (
            <ColorPicker
              style={{ marginTop: 8 }}
              value={value ?? ""}
              handleChange={onChange}
            />
          )}
        />
      )}
    </Layout>
  );
}

const Layout = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
