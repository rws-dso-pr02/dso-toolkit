import { Modal } from "dso-toolkit";
import * as React from "react";

import { DsoModal } from "../../components";
import { ComponentImplementation } from "../../templates";

export const reactModal: ComponentImplementation<Modal<JSX.Element>> = {
  component: "modal",
  implementation: "react",
  template: () =>
    function modalTemplate({ modalTitle, role, showCloseButton, body, footer, dsoClose }) {
      return (
        <DsoModal role={role} modalTitle={modalTitle} showCloseButton={showCloseButton} onDsoClose={dsoClose}>
          <div slot="body">{body}</div>
          {footer && <div slot="footer">{footer}</div>}
        </DsoModal>
      );
    },
};
