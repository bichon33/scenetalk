import {
  BellIcon,
  HomePinIcon,
  LogoutIcon,
  TrashIcon,
  UserIcon,
} from "@/components/icons";
import { AppFrame } from "@/components/layout/AppFrame";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import {
  SettingsGroup,
  SettingsRow,
  SettingsSectionLabel,
} from "@/components/settings/SettingsRow";
import { ThemeToggleRow } from "@/components/settings/ThemeToggleRow";
import { Toggle } from "@/components/ui/Toggle";

export default function SettingsPage() {
  return (
    <AppFrame>
      <ScreenHeader title="설정" backHref="/" />

      <div className="px-5.5 pt-5.5">
        <SettingsSectionLabel>계정</SettingsSectionLabel>
        <SettingsGroup>
          <SettingsRow
            icon={<UserIcon />}
            title="계정 정보"
            subtitle="movie.lover@email.com"
            showChevron
          />
        </SettingsGroup>

        <SettingsSectionLabel>화면</SettingsSectionLabel>
        <SettingsGroup>
          <ThemeToggleRow />
          <SettingsRow
            icon={<HomePinIcon />}
            title="고정된 방 표시"
            subtitle="홈 화면 하단에 고정한 채팅방을 보여줘요"
            trailing={<Toggle defaultChecked aria-label="고정된 방 표시" />}
          />
        </SettingsGroup>

        <SettingsSectionLabel>알림</SettingsSectionLabel>
        <SettingsGroup>
          <SettingsRow
            icon={<BellIcon />}
            title="대화 리마인드 알림"
            subtitle="이어서 대화하지 않은 방이 있을 때"
            trailing={<Toggle defaultChecked aria-label="대화 리마인드 알림" />}
          />
        </SettingsGroup>

        <SettingsSectionLabel>데이터</SettingsSectionLabel>
        <SettingsGroup>
          <SettingsRow
            icon={<TrashIcon />}
            title="대화 기록 초기화"
            subtitle="모든 방과 분석 결과가 삭제돼요"
            showChevron
          />
        </SettingsGroup>

        <SettingsGroup>
          <SettingsRow icon={<LogoutIcon />} title="로그아웃" danger />
        </SettingsGroup>
      </div>

      <p className="px-5.5 pt-5 pb-10 text-center text-[0.74rem] text-[var(--ink-dim)]">
        Scenunion v0.1 (가안)
      </p>
    </AppFrame>
  );
}
